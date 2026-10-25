import { redirect } from "next/navigation";

/** JoBranch review homepage. Production remains unchanged on main. */
export default function CompanyPage() {
  redirect("/astra-preview.html");
}
