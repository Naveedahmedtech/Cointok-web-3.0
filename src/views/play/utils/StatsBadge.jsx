const StatsBadge = ({ icon, count }) => (
  <div className="text-text-light border-2 border-text-primary flex items-center justify-around flex-wrap rounded-md p-2">
    <img src={icon} alt="" className="me-2" />
    <p>{count}</p>
  </div>
);
 
export default StatsBadge;
