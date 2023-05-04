
import React, { PropsWithChildren } from "react";

const Row = ({ children }: PropsWithChildren<Record<never, never>>) => {
    return <div className="flex">{children}</div>;
};

export default React.memo(Row);
