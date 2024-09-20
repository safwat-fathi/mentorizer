import { withI18n } from "@/lib/utils/middleware/with18n";

import { stackMiddlewares } from "@/lib/utils/middleware/stack";

const middlewares = [withI18n];
export default stackMiddlewares(middlewares);

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|icon.png|manifest.json|robots.txt).*)"],
};
