"use client"
import HomeSuperadmin from "@/modules/public/modules/admin/components/HomeSuperadmin";
import MaxWithAdmin from "@/modules/public/modules/veterinary/components/MaxWithAdmin";

const page = () => {

  return (
    <MaxWithAdmin>

      <HomeSuperadmin></HomeSuperadmin>
    </MaxWithAdmin>
  )
}

export default page