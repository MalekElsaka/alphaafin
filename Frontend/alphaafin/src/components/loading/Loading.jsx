import { Triangle } from 'react-loader-spinner';

const Loading = () => {
    return ( 
        <div className="loading-container w-full h-full flex justify-center items-center">
            <Triangle
                height="150"
                width="150"
                color="#FF9202"
                ariaLabel="loading"
            />
        </div>
     );
}
 
export default Loading;