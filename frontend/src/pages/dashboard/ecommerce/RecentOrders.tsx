import { dashboardAssets } from "../assets";
import Badge from "../ui/badge/Badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

interface Product {
  id: number;
  name: string;
  variants: string;
  category: string;
  price: string;
  image: string;
  status: "Delivered" | "Pending" | "Canceled";
}

const tableData: Product[] = [
  {
    id: 1,
    name: "MacBook Pro 13",
    variants: "2 Variants",
    category: "Laptop",
    price: "$2,399.00",
    status: "Delivered",
    image: dashboardAssets.products.product01,
  },
  {
    id: 2,
    name: "Apple Watch Ultra",
    variants: "1 Variant",
    category: "Watch",
    price: "$879.00",
    status: "Pending",
    image: dashboardAssets.products.product02,
  },
  {
    id: 3,
    name: "iPhone 15 Pro Max",
    variants: "2 Variants",
    category: "Smartphone",
    price: "$1,869.00",
    status: "Delivered",
    image: dashboardAssets.products.product03,
  },
  {
    id: 4,
    name: "iPad Pro 3rd Gen",
    variants: "2 Variants",
    category: "Tablet",
    price: "$1,699.00",
    status: "Canceled",
    image: dashboardAssets.products.product04,
  },
  {
    id: 5,
    name: "AirPods Pro 2nd Gen",
    variants: "1 Variant",
    category: "Accessories",
    price: "$240.00",
    status: "Delivered",
    image: dashboardAssets.products.product05,
  },
];

export default function RecentOrders() {
  return (
    <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white">
      <div className="flex flex-col gap-4 border-b border-slate-100 px-6 py-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            Product Activity
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-900">
            Recent Orders
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Latest purchased products and their delivery status.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-white hover:text-slate-900">
            <svg
              className="stroke-current"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.29004 5.90393H17.7067"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.7075 14.0961H2.29085"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.0826 3.33331C13.5024 3.33331 14.6534 4.48431 14.6534 5.90414C14.6534 7.32398 13.5024 8.47498 12.0826 8.47498C10.6627 8.47498 9.51172 7.32398 9.51172 5.90415C9.51172 4.48432 10.6627 3.33331 12.0826 3.33331Z"
                strokeWidth="1.5"
              />
              <path
                d="M7.91745 11.525C6.49762 11.525 5.34662 12.676 5.34662 14.0959C5.34661 15.5157 6.49762 16.6667 7.91745 16.6667C9.33728 16.6667 10.4883 15.5157 10.4883 14.0959C10.4883 12.676 9.33728 11.525 7.91745 11.525Z"
                strokeWidth="1.5"
              />
            </svg>
            Filter
          </button>
          <button className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800">
            See all
          </button>
        </div>
      </div>

      <div className="max-w-full overflow-x-auto px-3 pb-3 pt-2">
        <Table>
          <TableHeader className="border-y border-slate-100">
            <TableRow>
              <TableCell
                isHeader
                className="py-4 text-start text-xs font-semibold uppercase tracking-[0.16em] text-slate-400"
              >
                Products
              </TableCell>
              <TableCell
                isHeader
                className="py-4 text-start text-xs font-semibold uppercase tracking-[0.16em] text-slate-400"
              >
                Category
              </TableCell>
              <TableCell
                isHeader
                className="py-4 text-start text-xs font-semibold uppercase tracking-[0.16em] text-slate-400"
              >
                Price
              </TableCell>
              <TableCell
                isHeader
                className="py-4 text-start text-xs font-semibold uppercase tracking-[0.16em] text-slate-400"
              >
                Status
              </TableCell>
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-slate-100">
            {tableData.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="py-4">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                      <img
                        src={product.image}
                        className="h-full w-full object-cover"
                        alt={product.name}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {product.name}
                      </p>
                      <span className="text-xs text-slate-500">
                        {product.variants}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="py-4 text-sm font-medium text-slate-600">
                  {product.category}
                </TableCell>
                <TableCell className="py-4 text-sm font-semibold text-slate-900">
                  {product.price}
                </TableCell>
                <TableCell className="py-4">
                  <Badge
                    size="sm"
                    color={
                      product.status === "Delivered"
                        ? "success"
                        : product.status === "Pending"
                          ? "warning"
                          : "error"
                    }
                  >
                    {product.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
