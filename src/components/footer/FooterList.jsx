const FooterList = ({ listTitle, listItems }) => {
  return (
    <div className="a">
      <h4 className="footer-list-title">{listTitle}</h4>
      <div className="footer-list-line"></div>
      <ul className="footer-list">{listItems}</ul>
    </div>
  );
};
export default FooterList;
