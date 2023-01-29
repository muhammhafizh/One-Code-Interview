import ReactPaginate from "react-paginate";

function PaginationComponent({ pageCount, onPageChange }) {
  return (
    <div className="mt-5">
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageCount={pageCount}
        marginPagesDisplayed={3}
        pageRangeDisplayed={3}
        onPageChange={onPageChange}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
      />
    </div>
  );
}

export default PaginationComponent;
