import { useState } from 'react';

import Nav from '../../component/nav/nav';
import HOSTELDATA from '../../mockup-hostel-data.json'

import Hostel from '../../component/hostel-component/hostel-comp';
import HostelPagination from '../../component/hostel-pagination/hostel-pagination';

import { ReactComponent as ChangePage } from '../../Assets/hostel-pages/prev-next.svg';
import './hostel-pages.scss'

const HostelPage = () => {

    const hostelPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);

    const start = (currentPage - 1) * hostelPerPage;
    const end = currentPage * hostelPerPage;

    const totalPages = Math.ceil(HOSTELDATA.length / hostelPerPage);

    const gotoPage = (page) => {
      setCurrentPage(page);
    }

    const gotoNextPage = () => {
      setCurrentPage(currentPage + 1);
    }

    const gotoPrevPage = () => {
      setCurrentPage(currentPage - 1);
    }

  return (
    <div className='hostel-page'>
        <Nav />
        <div className="hostel-card-container">
          {currentPage > 1 && <ChangePage className='prev-next-btn previous-page' onClick={gotoPrevPage}/>}
            {HOSTELDATA.slice(start, end).map(hostel => <Hostel hostel={hostel} key={hostel.id}/>)}
          {currentPage < totalPages && <ChangePage className='prev-next-btn next-page' onClick={gotoNextPage}/>}
        </div>
        <HostelPagination totalPages={totalPages} gotoPage={gotoPage} currentPage={currentPage} />
    </div>
  )
}

export default HostelPage