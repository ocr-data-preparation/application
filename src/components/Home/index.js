import React from "react";

import UploadDialog from "./UploadDialog";
import DownloadDialog from "./DownloadDialog";

export default function Home() {
  return (
    <div>
      <UploadDialog />
      <DownloadDialog />
    </div>
  );
}
