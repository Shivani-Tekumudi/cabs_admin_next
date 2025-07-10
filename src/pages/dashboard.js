import { protectRoute } from "@/auth/protectedRoute";
import dynamic from 'next/dynamic';


const Sidebar = dynamic(() => import('@/components/Sidebar'), {
  ssr: false,
  loading: () => <div>Loading Sidebar...</div>,
});
const Header = dynamic(() => import('@/components/Header'), {
  ssr: false,
  loading: () => <div>Loading Sidebar...</div>,
});


const Table = dynamic(() => import('@/components/Table'), {
  ssr: false,
  loading: () => <div>Loading Table...</div>,
});

export const getServerSideProps = protectRoute;

export default function Dashboard() {
    return(
        <>
<Sidebar />
<Header />
<div class="relative overflow-x-auto  sm:rounded-lg md:ml-[18rem]  md:mr-5  md:mt-6 ">
        <div class="flex justify-between items-center p-5  rtl:text-right text-gray-900 ">
           <div className="text-lg font-semibold text-left">Rental Listing</div> 
           <div> <form class="max-w-sm  flex items-center">
               <span className="text-nowrap pr-1">Filter by </span>
 
<select defaultValue="Pick a text editor" className="select select-primary bg-white border border-gray-300 text-gray-900">
  <option disabled={true}>Status</option>
  <option>Approved</option>
  <option>Pending</option>
  <option>Rejected</option>
</select>
            </form>
        </div></div>
       <Table />
       </div>
        </>
    )
}