import { GET as renderCorporateHome } from "@/app/astra-reviewed/route";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return renderCorporateHome(request);
}
