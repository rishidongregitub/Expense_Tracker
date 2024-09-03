
export default function Labels(){
  return (
    <>{LabelComponent()}</>
  )
}
function LabelComponent(){
    return(
        <div className="labels flex justify-between">
            <div className="flex gap-2">
                <div className="w-2 h-2 rounded py-3" style={{background:'#f9c74f'}}>
                </div>
                <h3 className="text-md">Savings</h3>
            </div>
            <h3 className="font-bold">45%</h3>
        </div>
    )
}