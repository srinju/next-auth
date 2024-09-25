import Image from "next/image";
import { AppBar } from "./components/appbar";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "./lib/auth";

export default async function Home() {
  //WHEN WE DEFINE THE GERSERVERSESSION thne we have to pass the next_auth as an argument inside the function
  const session = await getServerSession(NEXT_AUTH); //getting sessions for server componts we use getserversession
  return <div>
    <div>
      <AppBar />
    </div>
    <div>
      {JSON.stringify(session)}
    </div>
  </div>
}
