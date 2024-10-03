const WithPadding = (Component) => {
    return (props) => (
      <div className="sectionWrapper">
        <Component {...props} />
      </div>
    );
  };

  export default WithPadding
  