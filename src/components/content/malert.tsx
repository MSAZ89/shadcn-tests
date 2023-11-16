import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Malert() {
  return (
    <>
      <Alert className="lg:w-1/2">
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>No alerts</AlertDescription>
      </Alert>
      <Alert className="lg:w-1/2 mt-4 border-red-500" variant="destructive">
        <AlertTitle className="text-red-500">Error</AlertTitle>
        <AlertDescription className="text-red-500">
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
      <Alert className="lg:w-1/2 mt-4 border-green-500">
        <AlertTitle className="text-green-500">In-Progress</AlertTitle>
        <AlertDescription className="text-green-500">
          Your session is in progress.
        </AlertDescription>
      </Alert>
    </>
  );
}
