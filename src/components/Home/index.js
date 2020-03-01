import React from "react";

import UploadDialog from "./UploadDialog";
import DownloadDialog from "./DownloadDialog";
import DownloadDialogNoPath from "./DownloadDialogNoPath";

export default function Home() {
  return (
    <div>
      <UploadDialog />
      <DownloadDialog />
      <DownloadDialogNoPath />
    </div>
  );
}
