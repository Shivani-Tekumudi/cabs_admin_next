import { protectRoute } from "@/auth/protectedRoute";

import Layout from '@/components/Layout';

import Table from "components/Table";
import { useEffect,useState } from "react";
import { useAdminContext } from "context/adminContext";

export const getServerSideProps = protectRoute;

export default function Dashboard({adminName }) {

const { listings, setListings } = useAdminContext();
const [statusFilter,setStatusFilter] =useState()


    return(
        <>
 <Layout adminName={adminName}/>
<div className="relative overflow-x-auto  sm:rounded-lg md:ml-[18rem]  md:mr-5  md:mt-6 ">
        <div className="flex justify-between items-center p-5  rtl:text-right text-gray-900 ">
           <div className="text-lg font-semibold text-left">Rental Listing</div> 
           <div> <form className="max-w-sm  flex items-center">
               <span className="text-nowrap pr-1">Filter by </span>
 
<select className="select select-primary bg-white border border-gray-300 text-gray-900" value={statusFilter}  onChange={(e) => setStatusFilter(e.target.value)}>
  <option value =''disabled selected >Status</option>
  <option>Approved</option>
  <option>Pending</option>
  <option>Rejected</option>
</select>
            </form>
        </div></div>
      
       <Table statusFilter={statusFilter} adminName={adminName}/>
       </div>
      
        </>
    )
}