export default function InputComponent(props) {

    function handleKeyDown(e){
        if(e.key === 'Enter'){
            props.fetchWeatherData();
        }
    }
    return (
        <div className="search">
      <input
        type="text"
        value={props.locationName}
        placeholder="Enter Location ..."
        onChange={(e) => props.setLocation(e.target.value)}
        onKeyDown={handleKeyDown} 
      />
    </div>
    );
}

