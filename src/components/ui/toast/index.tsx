export default function Toast({ message }: { message: string }) {
  return (
    <div
      id="toast-bottom-right"
      className="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-card-foreground bg-card divide-x rtl:divide-x-reverse  rounded-lg shadow-sm right-5 bottom-5   "
      role="alert"
    >
      <div className="text-sm font-normal">{message}</div>
    </div>
  );
}
