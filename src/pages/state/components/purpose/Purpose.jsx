import { PureComponent as Component } from "react";

import points from "./points";
import Card from "./components/card/Card";

const propTypes = {};

const defaultProps = {};

class Purpose extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col gap-6">
        <h3 className="font-semibold text-2xl">Lietošanas mērķi</h3>
        <p className="text-lg">
          Galvenais mērķis ir modelēt objekta uzvedību, izprast pārejas starp
          stāvokļiem un attēlot sarežģītas dzīves cikla un notikumu vadītas
          sistēmas
        </p>

        <div className="flex gap-4 sm:gap-2 flex-wrap justify-center">
          {points.map((item, index) => {
            return <Card key={index} title={item.title} desc={item.desc} />;
          })}
        </div>
      </div>
    );
  }
}

Purpose.propTypes = propTypes;

Purpose.defaultProps = defaultProps;

export default Purpose;
