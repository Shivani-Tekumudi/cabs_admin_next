export default function Table(){
    return (
        <>
        



   
       
<div class=" py-2 px-2 pb-0 bg-white  rounded-lg shadow-sm ">
    
    <table class="w-full text-md text-left rtl:text-right text-gray-500 ">
    
        <thead class="text-sm text-gray-700 uppercase bg-white border border-gray-100 ">
            <tr className="rounded-t-lg">
                <th scope="col" class="px-6 py-3 text-center">
                    S.No
                </th>
                <th scope="col" class="px-6 py-3 text-center">
                    User Name
                </th>
                 <th scope="col" class="px-6 py-3 text-center">
                    Car
                </th>
                 <th scope="col" class="px-6 py-3 text-center">
                    Start Date
                </th>
                 <th scope="col" class="px-6 py-3 text-center">
                    Return Date
                </th>
              <th scope="col" class="px-6 py-3 text-center">
                   Cost
                </th>
                
               
                <th scope="col" class="px-6 py-3 text-center">
                    <span class="">Actions</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b  border-gray-200">
                <td scope="row" class="px-6 py-4  ">
                   1
                </td>
               <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Shivani battachari alias
                </th>
                <td class="px-6 py-4">


Nissan Leaf

                    
                
                </td>
                <td class="px-6 py-4 ">

                    15/july/2025
                </td>
                <td class="px-6 py-4 ">

                    18/july/2025
                </td>
                <td class="px-6 py-4 ">

                    $400
                </td>
                <td class="px-6 py-4 ">
                   
<a class="p-1 px-4 mb-4 text-md font-semibold text-green-500 rounded-lg border border-green-500 rounded-full  inline-block mr-2 hover:text-white hover:bg-green-500" role="alert">
  <span class="font-medium">Approve</span>  
</a>

<a class="p-1 px-4 mb-4 text-md text-red-500 rounded-lg border border-red-500 inline-block mr-2 hover:text-white hover:bg-red-500" role="alert">
  <span class="font-medium">Rejected</span> 
</a>

 <a class="p-1 px-4 mb-4 text-md font-semibold text-blue-600 rounded-lg border border-blue-600 inline-block hover:text-white hover:bg-blue-600 " role="alert" href="#" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal">
  <span class="font-medium">View</span> 
</a>
                </td>
            </tr>
          <tr class="bg-white border-b  border-gray-200">
                <td scope="row" class="px-6 py-4  ">
                   1
                </td>
               <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Shivani
                </th>
                <td class="px-6 py-4">


Nissan Leaf

                    
                
                </td>
                <td class="px-6 py-4 ">

                    15/july/2025
                </td>
                <td class="px-6 py-4 ">

                    18/july/2025
                </td>
                <td class="px-6 py-4 ">

                    $400
                </td>
                <td class="px-6 py-4 ">
                   
<a class="p-1 px-4 mb-4 text-md font-semibold text-green-500 rounded-lg border border-green-500 rounded-full  inline-block mr-2 hover:text-white hover:bg-green-500" role="alert">
  <span class="font-medium">Approve</span>  
</a>

<a class="p-1 px-4 mb-4 text-md text-red-500 rounded-lg border border-red-500 inline-block mr-2 hover:text-white hover:bg-red-500" role="alert">
  <span class="font-medium">Rejected</span> 
</a>

 <a class="p-1 px-4 mb-4 text-md font-semibold text-blue-600 rounded-lg border border-blue-600 inline-block hover:text-white hover:bg-blue-600 " role="alert">
  <span class="font-medium">View</span> 
</a>
                </td>
            </tr>
            <tr class="bg-white border-b  border-gray-200">
                <td scope="row" class="px-6 py-4  ">
                   1
                </td>
               <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Shivani
                </th>
                <td class="px-6 py-4">


Nissan Leaf

                    
                
                </td>
                <td class="px-6 py-4 ">

                    15/july/2025
                </td>
                <td class="px-6 py-4 ">

                    18/july/2025
                </td>
                <td class="px-6 py-4 ">

                    $400
                </td>
                <td class="px-6 py-4 ">
                   
<a class="p-1 px-4 mb-4 text-md font-semibold text-green-500 rounded-lg border border-green-500 rounded-full  inline-block mr-2 hover:text-white hover:bg-green-500" role="alert">
  <span class="font-medium">Approve</span>  
</a>

<a class="p-1 px-4 mb-4 text-md text-red-500 rounded-lg border border-red-500 inline-block mr-2 hover:text-white hover:bg-red-500" role="alert">
  <span class="font-medium">Rejected</span> 
</a>

 <a class="p-1 px-4 mb-4 text-md font-semibold text-blue-600 rounded-lg border border-blue-600 inline-block hover:text-white hover:bg-blue-600 " role="alert">
  <span class="font-medium">View</span> 
</a>
                </td>
            </tr>
        </tbody>
    </table>
    </div>


    <div id="editUserModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-xl max-h-full">
            
            <form class="relative bg-white rounded-lg shadow-sm ">
             
                <div class="flex items-start justify-between p-4 border-b rounded-t ">
                    <h3 class="text-xl font-semibold text-gray-900 ">
                        Edit user
                    </h3>
                   <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " data-modal-hide="editUserModal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                </div>
          
                <div class="p-6 space-y-6">
                    <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-3">
                            <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 ">First Name</label>
                            <input type="text" name="first-name" id="first-name" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " placeholder="Bonnie" required="" />
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                            <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 ">Last Name</label>
                            <input type="text" name="last-name" id="last-name" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " placeholder="Green" required="" />
                        </div>
                        
                        
                        <div class="col-span-6 sm:col-span-3">
                            <label for="department" class="block mb-2 text-sm font-medium text-gray-900 ">Start Date</label>
                            <input type="date" name="department" id="department" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " placeholder="Development" required="" />
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 ">Return Date</label>
                            <input type="date" name="company" id="company" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " placeholder="123456" required="" />
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                            <label for="current-password" class="block mb-2 text-sm font-medium text-gray-900 ">Current Password</label>
                           <select defaultValue="Pick a text editor" className="w-full select select-primary bg-white border border-gray-300 text-gray-900">
  <option disabled={true}>Status</option>
  <option>Approved</option>
  <option>Pending</option>
  <option>Rejected</option>
</select>
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                            <label for="new-password" class="block mb-2 text-sm font-medium text-gray-900 ">New Password</label>
                            <select defaultValue="Pick a text editor" className="w-full  select select-primary bg-white border border-gray-300 text-gray-900">
  <option disabled={true}>Status</option>
  <option>Approved</option>
  <option>Pending</option>
  <option>Rejected</option>
</select>
                        </div>
                    </div>
                </div>
               
                <div class="flex items-center p-6 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b ">
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Save all</button>
                </div>
            </form>
        </div>
    </div>
</>
    )
}