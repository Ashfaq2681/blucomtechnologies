const shortDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
});

const monthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "2-digit",
});

const compactNumberFormatter = new Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 1,
});

function toDate(value) {
  if (!value) {
    return null;
  }

  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function getStartOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function getMonthKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function getDayKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
    date.getDate()
  ).padStart(2, "0")}`;
}

function getMonthRange(monthCount) {
  const months = [];
  const now = new Date();

  for (let index = monthCount - 1; index >= 0; index -= 1) {
    const date = new Date(now.getFullYear(), now.getMonth() - index, 1);
    months.push({
      key: getMonthKey(date),
      label: monthFormatter.format(date),
      date,
    });
  }

  return months;
}

function getDayRange(dayCount) {
  const days = [];
  const today = getStartOfDay(new Date());

  for (let index = dayCount - 1; index >= 0; index -= 1) {
    const date = new Date(today);
    date.setDate(today.getDate() - index);
    days.push({
      key: getDayKey(date),
      label: shortDateFormatter.format(date),
      date,
    });
  }

  return days;
}

function getPercentChange(current, previous) {
  if (!previous) {
    return current ? 100 : 0;
  }

  return ((current - previous) / previous) * 100;
}

function formatDelta(value) {
  const rounded = Math.round(value * 10) / 10;
  const sign = rounded > 0 ? "+" : "";
  return `${sign}${rounded}%`;
}

function parseJsonArray(value) {
  if (Array.isArray(value)) {
    return value;
  }

  if (!value) {
    return [];
  }

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch (_error) {
    return [];
  }
}

function parseJsonObject(value) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value;
  }

  if (!value) {
    return {};
  }

  try {
    const parsed = JSON.parse(value);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed)
      ? parsed
      : {};
  } catch (_error) {
    return {};
  }
}

function buildSeries(items, keyName, range) {
  const counts = new Map(range.map((entry) => [entry.key, 0]));

  items.forEach((item) => {
    const date = toDate(item[keyName]);
    if (!date) {
      return;
    }

    const key = range[0]?.key?.length === 7 ? getMonthKey(date) : getDayKey(date);
    if (counts.has(key)) {
      counts.set(key, counts.get(key) + 1);
    }
  });

  return range.map((entry) => counts.get(entry.key) || 0);
}

function sum(values) {
  return values.reduce((total, value) => total + value, 0);
}

function getRecentActivity({ leadRequests, contactLeads, newsletterSubscribers }) {
  const leadItems = leadRequests.map((item) => ({
    id: `lead-${item.id}`,
    type: "Multistep Lead",
    title: item.project_name || "Untitled project",
    subtitle: item.company_name || item.email || "Unknown company",
    detail: item.email || item.phone || "No contact details",
    createdAt: item.created_at,
    status: item.category || "Lead request",
  }));

  const contactItems = contactLeads.map((item) => ({
    id: `contact-${item.id}`,
    type: "Contact Email",
    title: item.name || item.email || "Unnamed contact",
    subtitle: item.company || item.title || "General inquiry",
    detail: item.email || item.phone || "No contact details",
    createdAt: item.created_at,
    status: "Contact form",
  }));

  const subscriberItems = newsletterSubscribers.map((item) => ({
    id: `subscriber-${item.id}`,
    type: "Newsletter",
    title: item.email || "Unknown subscriber",
    subtitle: item.status === "subscribed" ? "Active subscription" : "Unsubscribed",
    detail:
      item.status === "subscribed"
        ? `Subscribed ${item.subscribed_at ? shortDateFormatter.format(new Date(item.subscribed_at)) : "recently"}`
        : `Unsubscribed ${item.unsubscribed_at ? shortDateFormatter.format(new Date(item.unsubscribed_at)) : "recently"}`,
    createdAt: item.subscribed_at || item.updated_at || item.created_at,
    status: item.status || "subscriber",
  }));

  return [...leadItems, ...contactItems, ...subscriberItems]
    .sort((first, second) => {
      const firstTime = toDate(first.createdAt)?.getTime() || 0;
      const secondTime = toDate(second.createdAt)?.getTime() || 0;
      return secondTime - firstTime;
    })
    .slice(0, 8);
}

export function formatCompactNumber(value) {
  return compactNumberFormatter.format(value || 0);
}

export function buildLeadDashboardData({
  leadRequests = [],
  contactLeads = [],
  newsletterSubscribers = [],
} = {}) {
  const activeSubscribers = newsletterSubscribers.filter(
    (item) => item.status === "subscribed"
  );

  const monthRange = getMonthRange(6);
  const thirtyDayRange = getDayRange(30);
  const sevenDayRange = getDayRange(7);

  const leadMonthly = buildSeries(leadRequests, "created_at", monthRange);
  const contactMonthly = buildSeries(contactLeads, "created_at", monthRange);
  const subscriberMonthly = buildSeries(activeSubscribers, "subscribed_at", monthRange);

  const leadThirtyDay = buildSeries(leadRequests, "created_at", thirtyDayRange);
  const contactThirtyDay = buildSeries(contactLeads, "created_at", thirtyDayRange);
  const subscriberThirtyDay = buildSeries(activeSubscribers, "subscribed_at", thirtyDayRange);

  const leadSevenDay = buildSeries(leadRequests, "created_at", sevenDayRange);
  const contactSevenDay = buildSeries(contactLeads, "created_at", sevenDayRange);
  const subscriberSevenDay = buildSeries(activeSubscribers, "subscribed_at", sevenDayRange);

  const currentMonthTotal =
    leadMonthly[leadMonthly.length - 1] +
    contactMonthly[contactMonthly.length - 1] +
    subscriberMonthly[subscriberMonthly.length - 1];
  const previousMonthTotal =
    (leadMonthly[leadMonthly.length - 2] || 0) +
    (contactMonthly[contactMonthly.length - 2] || 0) +
    (subscriberMonthly[subscriberMonthly.length - 2] || 0);

  const target = Math.max(12, Math.ceil(Math.max(currentMonthTotal, previousMonthTotal, 10) * 1.2));
  const progress = target ? Math.min(100, (currentMonthTotal / target) * 100) : 0;
  const totalInbound = leadRequests.length + contactLeads.length + activeSubscribers.length;
  const last30DaysTotal =
    sum(leadThirtyDay) + sum(contactThirtyDay) + sum(subscriberThirtyDay);

  const sourceBreakdown = [
    {
      label: "Multistep Form",
      count: leadRequests.length,
      description: "Project scoping requests from the guided multistep form.",
    },
    {
      label: "Contact Emails",
      count: contactLeads.length,
      description: "Direct inbound email/contact form submissions.",
    },
    {
      label: "Newsletter",
      count: activeSubscribers.length,
      description: "Currently subscribed newsletter contacts.",
    },
  ].map((item) => ({
    ...item,
    share: totalInbound ? Math.round((item.count / totalInbound) * 100) : 0,
  }));

  return {
    totals: {
      multistep: leadRequests.length,
      contacts: contactLeads.length,
      subscribers: activeSubscribers.length,
      totalInbound,
      last30Days: last30DaysTotal,
      currentMonth: currentMonthTotal,
      previousMonth: previousMonthTotal,
      monthlyDelta: getPercentChange(currentMonthTotal, previousMonthTotal),
    },
    metrics: [
      {
        key: "multistep",
        label: "Multistep Leads",
        value: leadRequests.length,
        tone: "emerald",
        change: formatDelta(getPercentChange(sum(leadSevenDay), sum(leadThirtyDay.slice(0, 23)) / 3.3 || 0)),
      },
      {
        key: "contacts",
        label: "Contact Emails",
        value: contactLeads.length,
        tone: "slate",
        change: formatDelta(getPercentChange(sum(contactSevenDay), sum(contactThirtyDay.slice(0, 23)) / 3.3 || 0)),
      },
      {
        key: "subscribers",
        label: "Newsletter Subs",
        value: activeSubscribers.length,
        tone: "amber",
        change: formatDelta(getPercentChange(sum(subscriberSevenDay), sum(subscriberThirtyDay.slice(0, 23)) / 3.3 || 0)),
      },
      {
        key: "total",
        label: "Total Inbound",
        value: totalInbound,
        tone: "teal",
        change: formatDelta(getPercentChange(last30DaysTotal, previousMonthTotal)),
      },
    ],
    monthlyChart: {
      labels: monthRange.map((entry) => entry.label),
      series: [
        { name: "Multistep Form", data: leadMonthly },
        { name: "Contact Emails", data: contactMonthly },
        { name: "Newsletter", data: subscriberMonthly },
      ],
    },
    statistics: {
      "7d": {
        labels: sevenDayRange.map((entry) => entry.label),
        series: [
          { name: "Multistep Form", data: leadSevenDay },
          { name: "Contact Emails", data: contactSevenDay },
          { name: "Newsletter", data: subscriberSevenDay },
        ],
      },
      "30d": {
        labels: thirtyDayRange.map((entry) => entry.label),
        series: [
          { name: "Multistep Form", data: leadThirtyDay },
          { name: "Contact Emails", data: contactThirtyDay },
          { name: "Newsletter", data: subscriberThirtyDay },
        ],
      },
      "90d": {
        labels: monthRange.map((entry) => entry.label),
        series: [
          { name: "Multistep Form", data: leadMonthly },
          { name: "Contact Emails", data: contactMonthly },
          { name: "Newsletter", data: subscriberMonthly },
        ],
      },
    },
    target: {
      target,
      current: currentMonthTotal,
      progress,
      delta: getPercentChange(currentMonthTotal, previousMonthTotal),
      subscribers: activeSubscribers.length,
      last30Days: last30DaysTotal,
    },
    breakdown: sourceBreakdown,
    recentActivity: getRecentActivity({
      leadRequests,
      contactLeads,
      newsletterSubscribers,
    }),
    parsers: {
      parseServices: parseJsonArray,
      parseGoals: parseJsonObject,
    },
  };
}

export function parseLeadServices(value) {
  return parseJsonArray(value);
}

export function parseLeadGoals(value) {
  return parseJsonObject(value);
}
