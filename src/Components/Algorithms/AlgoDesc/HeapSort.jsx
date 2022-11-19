const HeapSort = () => {
  return (
    <div>
      <div className="d-flex">
        <div className="p-2 col-lg-6">
          <p>
            is a simple sorting algorithm that repeatedly steps through the
            list, compares adjacent elements and swaps them if they are in the
            wrong order.The pass through the list is repeated until the list is
            sorted. The algorithm, which is a comparison sort, is named for the
            way smaller or larger elements "bubble" to the top of the list.
            Although the algorithm is simple, it is too slow and impractical for
            most problems
          </p>
        </div>
        <div className="p-2 col-lg-6">
          <ul className="text-left">
            <li>Worst case: O(nlog n)</li>
            <li>Best Case: O(nlog n)</li>
            <li>Average Case: O(nlog n)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeapSort;