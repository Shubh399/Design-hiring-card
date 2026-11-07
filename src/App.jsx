import Card from "./component/Card";
const App = () => {
  const jobs = [
    {
      id: 1,
      company: "Amazon",
      logo: "https://cdn.iconscout.com/icon/free/png-512/free-amazon-logo-icon-svg-download-png-675861.png?f=webp&w=512",
      posted: "5 days ago",
      role: "Senior UI/UX Designer",
      type: "Part-Time",
      level: "Senior Level",
      salary: "$120/hr",
      location: "Mumbai, India",
    },
    {
      id: 2,
      company: "Google",
      logo: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
      posted: "2 days ago",
      role: "Frontend Developer",
      type: "Full-Time",
      level: "Mid Level",
      salary: "$100/hr",
      location: "Bangalore, India",
    },
    {
      id: 3,
      company: "Microsoft",
      logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
      posted: "1 week ago",
      role: "React Developer",
      type: "Remote",
      level: "Senior Level",
      salary: "$150/hr",
      location: "Hyderabad, India",
    },
  ];
  console.log(jobs.salary);
  return (
    <div className="main">
      {jobs.map((el) => {
        return <Card  company={el.company} posted={el.posted} level={el.level} location={el.location} role={el.role} type={el.type} salary={el.salary} logo={el.logo}/>;
      })}
    </div>
  );
};

export default App;
