const obj = [
    {
      type: "Saving",
      color: "#f9c74f",
      percent: 45,
    },
    {
      type: "Investment",
      color: "rgb(255, 99, 132)",
      percent: 60,
    },
    {
      type: "Expense",
      color: "rgb(54, 162, 235)",
      percent: 10,
    },
  ];
  
  export default function Labels() {
    return (
      <>
        {obj.map((v, i) => (
          <LabelComponent key={i} data={v}/>
        ))}
      </>
    );
  }
  
  function LabelComponent({data}) {
    if(!data){
        return <></>
    }
    return (
      <div className="labels flex justify-between">
        <div className="flex gap-2">
          <div
            className="w-2 h-2 rounded py-3"
            style={{ background:data.color ?? '#f9c74f'}}
          ></div>
          <h3 className="text-md">{data.type ?? ''}</h3>
        </div>
        <h3 className="font-bold">{data.percent ?? 0}%</h3>
      </div>
    );
  }
  