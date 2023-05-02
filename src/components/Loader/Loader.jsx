import { ThreeCircles } from 'react-loader-spinner';

const Loader = ({ size = '100', margin = '0px' }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: `${margin}`,
      }}
    >
      <ThreeCircles
        height={size}
        width={size}
        wrapperStyle={{}}
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="rgb(0, 136, 125)"
        innerCircleColor="rgb(226, 219, 0)"
        middleCircleColor="rgb(0, 136, 125)"
      />
    </div>
  );
};

export default Loader;
