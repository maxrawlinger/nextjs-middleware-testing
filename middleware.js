export function middleware(req, res) {
  console.log("-------INVOKE-MIDDLEWARE-------");
  console.log({ "MIDDLEWARE: Request Method:": req.method });
  console.log({ "MIDDLEWARE: Requested URL:": req.nextUrl.pathname });
}
