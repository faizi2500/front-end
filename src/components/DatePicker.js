// import PropTypes from 'prop-types';

const DatePicker = () => {
  const arr = [];
  const startYear = 1900;
  const currentYear = 2020;
  const h = 0;
  for (let i = currentYear; i >= startYear; i -= 1) {
    arr.push(i);
  }
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <>
      <div>
        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
          <option>Select Year</option>
          {arr.map((each) => <option key={h + 1} value={each}>{each}</option>)}
        </select>
        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
          <option>Select Month</option>
          {months.map((each) => <option key={h + 1} value={each}>{each}</option>)}
        </select>
      </div>

    </>
  );
};

// DatePicker.propTypes = {
//   birthDay: PropTypes.number.isRequired,
//   birthMonth: PropTypes.number.isRequired,
//   birthYear: PropTypes.number.isRequired,
// };

export default DatePicker;
