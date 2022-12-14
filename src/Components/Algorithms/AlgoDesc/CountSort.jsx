import "./allDesc.css";
import CountTime from "../../../assests/CountSortTime.JPG";
const CountSort = () => {
  return (
    <div>
      <div className="d-flex">
        <div className="p-2 col-lg-7">
          <h1>What is Count Sort?</h1>
          <p className="p-4">
            Counting sort is a sorting algorithm that sorts the elements of an
            array by counting the number of occurrences of each unique element
            in the array. The count is stored in an auxiliary array and the
            sorting is done by mapping the count as an index of the auxiliary
            array.
          </p>
          <h1>How to calculate time complexity?</h1>
          <p className="p-4">
            <img className="col-12" src={CountTime} />
          </p>
        </div>
        <div className="p-2 col-lg-5">
          <ul className="text-left">
            <div className="GeneralContainer">
              <li>Worst case: O(n+k)</li>
            </div>
            <div className="GeneralContainer">
              <li>Best Case : O(n+k)</li>
            </div>
            <div className="GeneralContainer">
              <li>Average Case : O(n+k)</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CountSort;
