import "boxicons";
import { default as api } from "../store/apiSlice";

const History = () => {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
  const [deleteTransaction] = api.useDeleteTransactionMutation();
  let TransactionsContent;
  const handlerClick =(e)=>{
    if(!e.target.dataset.id) return 0;
    deleteTransaction({_id:e.target.dataset.id})
  } 
  if (isFetching) {
    TransactionsContent = <div>Fetching...</div>;
  } else if (isSuccess) {
    TransactionsContent = data.map((v, i) => (
      <Transaction key={i} category={v} handler={handlerClick}/>
    ));
  } else if (isError) {
    TransactionsContent = <div>Error loading transactions.</div>;
  }
 
  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">History</h1>
      {TransactionsContent}
    </div>
  );
};

function Transaction({ category,handler }) {
  if (!category) return null;

  return (
    <div
      className="item flex justify-center bg-gray-50 py-2 rounded-r"
      style={{ borderRight: `8px solid ${category.color ?? "#e5e5e5"}` }}
    >
      <button className="px-3" onClick={handler}>
        <box-icon
          color={category.color ?? "#e5e5e5"}
          size="15px"
          name="trash"
          data-id={category._id ?? ''}
        />
      </button>
      <span className="block w-full">{category.name ?? ""}</span>
    </div>
  );
}

export default History;
