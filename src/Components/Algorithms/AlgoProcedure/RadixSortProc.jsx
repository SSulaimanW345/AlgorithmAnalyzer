const PRIMARY_COLOR = "turquoise";
const SECONDARY_COLOR = "red";
const RadixSortProc = (props) => {
  return (
    <div>
      <div>
        <p>output = [0] * size; count = [0] * 10</p>
        <p>for i in range(0, size): index = array[i] </p>
        <p>count[index % 10] += 1</p>
        <p>for i in range(1, 10):</p>
        <p>count[i] += count[i - 1]</p>
        <p>i = size - 1</p>
        <p>while i is greater than 0:</p>
        <p>index = array[i]</p>
        <p>output[count[index % 10] - 1] = array[i]</p>
        <p>count[index % 10] -= 1; i -= 1</p>
        <p>for i in range(0, size):</p>
        <p> array[i] = output[i]</p>
      </div>
      <div>
        {props.stepData == "" && <div>click play button to start</div>}
        {props.stepData != "" && props.stepData[0] == 1 && (
          <div>
            Pass number: {props.stepData[5]} means consider digit at{" "}
            {props.stepData[6]}th place
          </div>
        )}
        {props.stepData != "" && props.stepData[0] == 0 && (
          <div>
            Pass number: {props.stepData[4]} means consider digit at{" "}
            {props.stepData[5]}th place
          </div>
        )}
        {props.stepData != "" &&
          props.stepData[0] == 0 &&
          props.stepData[3] == SECONDARY_COLOR && (
            <div>
              <p>Selected array element at index {props.stepData[1]}</p>
            </div>
          )}
        {props.stepData != "" &&
          props.stepData[0] == 0 &&
          props.stepData[3] == PRIMARY_COLOR && (
            <div>
              <p>Selected array element at index {props.stepData[1]}</p>
              <p>
                value of index {props.stepData[2]} in count array incremented by
                1
              </p>
            </div>
          )}
        {props.stepData != "" && props.stepData[0] == 1 && (
          <div>
            <p>populating sorted array</p>
            <p>
              element at index {props.stepData[3]} with value{" "}
              {props.stepData[2]} positioned at index {props.stepData[1]}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RadixSortProc;
