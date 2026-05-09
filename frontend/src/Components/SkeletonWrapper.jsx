// SkeletonWrapper.jsx
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonWrapper = ({ loading, children }) => {
  if (loading) {
    return (
      <div className="p-4 space-y-4">
        {/* Example skeletons for common layouts */}
        <Skeleton height={30} width="60%" />
        <Skeleton height={20} count={3} />
        <Skeleton height={200} />
        <Skeleton height={50} width="30%" />
      </div>
    );
  }

  return <>{children}</>;
};

export default SkeletonWrapper;