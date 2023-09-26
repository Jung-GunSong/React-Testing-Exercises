import { render } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

const { src, caption } = TEST_IMAGES[0];

it("rends Carousel without crashing", function () {
  render(<Card
    caption={caption}
    src={src}
    currNum={0}
    totalNum={3}
  />);
});


it("rends Carousel without crashing", function () {
  const { container } = render(
    <Card
      caption={caption}
      src={src}
      currNum={0}
      totalNum={3}
    />);

  expect(container).toMatchSnapshot();
});
