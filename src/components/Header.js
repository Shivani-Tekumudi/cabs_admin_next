export default function Header() {
    return (
        <>



            <nav className="bg-white border-gray-200 border border-gray-200">
                <div className=" flex flex-wrap items-center justify-between w-full p-2 ">

                    <div> <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span className="sr-only">Open sidebar</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                        </svg>
                    </button></div>
                    <div className=" md:block md:w-auto" id="navbar-dropdown">



                        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class=" px-5 py-2.5 text-center inline-flex items-center " type="button"><div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-blue-200 rounded-full ">
    <span class="font-medium text-gray-600 ">A</span>
</div> <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                        </button>


                        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 ">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                <li>
                                    <span  class="block px-4 py-2  text-gray-700">One Admin</span>
                                </li>
                               
                                
                            </ul>
                            <div class="py-2">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Sign Out</a>
    </div>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}