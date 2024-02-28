import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { ChartPieIcon } from '@heroicons/react/24/solid';
import Dashboard from './pages/dashboard.jsx';
import EditRiskOwner from './pages/editRiskOwner.jsx';
import AddRiskOwner from './pages/addRiskOwner.jsx';
import RiskOwnerDetails from './pages/viewRiskOwner.jsx';

function App() {
  const [contentVisible, setContentVisible] = useState('/dashboard');
  const [selectedMenu, setSelectedMenu] = useState('');

  const toggleContent = (menu) => {
    setContentVisible(!contentVisible);
    setSelectedMenu(menu);
  };

  return (
    <div className="flex h-screen bg-white-200">
      {/* Sidebar */}
      <div className="bg-white-800 text-grey-800 w-64 flex flex-col">
        {/* Sidebar logo */}
        <div className="p-4  flex items-center">
          <svg className="w-8 h-8 mr-2 text-grey" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /> */}
          </svg>
          <h2 className="text-xl font-semibold text-grey">the Logo</h2>
        </div>

        {/* Sidebar Links */}
        <div className="flex-grow p-4">
          <ul className="space-y-2">
            <li className={`hover:text-blue-500 ${selectedMenu === 'Dashboard' ? 'text-blue-500' : ''}`} onClick={() => toggleContent('Dashboard')}>
              <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-500 flex items-center hover:text-blue-500">
                <ChartPieIcon className="w-4 h-4  mr-2 hover:text-blue-500" />
                <span className="hover:text-blue-500">Dashboard</span>
              </Link>
            </li>
            <li className='hover:text-blue-500'>
              <a href="#" className="block px-4 py-2 text-sm text-gray-500 flex items-center hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4  mr-2 hover:text-blue-500">
                  <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12Zm2.25-3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 13.5 9Zm3.75-1.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-9Z" clipRule="evenodd" />
                </svg>
                <span className="hover:text-blue-500">Register</span>
              </a>
            </li>
            <li className='hover:text-blue-500'>
              <a href="#" className="block px-4 py-2 text-sm text-gray-500 flex items-center hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2 hover:text-blue-500">
                  <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm6.905 9.97a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72V18a.75.75 0 0 0 1.5 0v-4.19l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clipRule="evenodd" />
                  <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
                </svg>
                <span className="hover:text-blue-500">My Risk</span>
              </a>
            </li>
            <li className='hover:text-blue-500'>
              <a href="#" className="block px-4 py-2 text-sm text-gray-500 flex items-center hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2 hover:text-blue-500">
                  <path fillRule="evenodd" d="M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-6.182 6.182a1.5 1.5 0 0 0-.439 1.061v2.927a3 3 0 0 1-1.658 2.684l-1.757.878A.75.75 0 0 1 9.75 21v-5.818a1.5 1.5 0 0 0-.44-1.06L3.13 7.938a3 3 0 0 1-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836Z" clipRule="evenodd" />
                </svg>
                <span className="hover:text-blue-500">Controls</span>
              </a>
            </li>
            <li className='hover:text-blue-500'>
              <a href="#" className="block px-4 py-2 text-sm text-gray-500 flex items-center hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2 hover:text-blue-500">
                  <path d="M11.625 16.5a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Z" />
                  <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm6 16.5c.66 0 1.277-.19 1.797-.518l1.048 1.048a.75.75 0 0 0 1.06-1.06l-1.047-1.048A3.375 3.375 0 1 0 11.625 18Z" clipRule="evenodd" />
                  <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
                </svg>
                <span className="hover:text-blue-500">Assessment</span>
              </a>
            </li>
            <li className='hover:text-blue-500'>
              <a href="#" className="block px-4 py-2 text-sm text-gray-500 flex items-center hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2 hover:text-blue-500">
                  <path d="M5.566 4.657A4.505 4.505 0 0 1 6.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0 0 15.75 3h-7.5a3 3 0 0 0-2.684 1.657ZM2.25 12a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-6ZM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 0 1 6.75 6h10.5a3 3 0 0 1 2.683 1.657A4.505 4.505 0 0 0 18.75 7.5H5.25Z" />
                </svg>
                <span className="hover:text-blue-500">Reports</span>
              </a>
            </li>
            <li className='hover:text-blue-500'>
              <a href="#" className="block px-4 py-2 text-sm text-gray-500 flex items-center hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2 hover:text-blue-500">
                  <path d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" />
                  <path d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" />
                </svg>
                <span className="hover:text-blue-500">Masseges</span>
              </a>
            </li>
            <li className='hover:text-blue-500'>
              <a href="#" className="block px-4 py-2 text-sm text-gray-500 flex items-center hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2 hover:text-blue-500">
                  <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                </svg>
                <span className="hover:text-blue-500">Audit Trail</span>
              </a>
            </li>

            <li className='hover:text-blue-500'>
              <a href="#" className="block px-4 py-2 text-sm text-gray-500 flex items-center hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2 hover:text-blue-500">
                  <path fillRule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clipRule="evenodd" />
                </svg>
                <span className="hover:text-blue-500">Settings</span>
              </a>
            </li>
            <li className='hover:text-blue-500'>
              <a href="#" className="block px-4 py-2 text-sm text-gray-500 flex items-center hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2 hover:text-blue-500">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                </svg>
                <span className="hover:text-blue-500">Help and Resources</span>
              </a>
            </li>

          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-1 bg-gray-100">
        <div className="bg-white w-full">
          <li className=' list-none'>
            <a href="#" className="block px-4 py-2 text-sm text-gray-500 flex items-center justify-between">
              <div className="flex items-center">
                {/* Search input */}
                <div className="relative">
                  <input type="text" placeholder="Search" className="px-8 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                  <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
                    {/* Search icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-400">
                      <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right side icons */}
              <div className="flex items-center">
                <h3 className="font-bold mr-4">logout</h3>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-4">
                  <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clipRule="evenodd" />
                </svg>
                <div className="flex items-center">
                  <img src="user-profile-image.jpg" alt="User Profile" className="w-8 h-8 rounded-full mr-2 hover:text-blue-500" />
                </div>
              </div>
            </a>
          </li>
        </div>
        {/* Conditionally render based on the state */}
        <div className='p-8' style={{ display: contentVisible ? 'block' : 'none' }}>
          {/* Your content goes here */}
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/editRiskOwner/:id" element={<EditRiskOwner />} />
            <Route path="/addRiskOwner" element={<AddRiskOwner />} />
            <Route path="/viewRiskOwner/:id" element={<RiskOwnerDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
