import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("works when you click on the right arrow", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

it("render Carousel without crashing", function () {
  render(<Carousel
    photos={TEST_IMAGES}
    title="images for testing"
  />);
});


it("matches snapshot", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />);

  expect(container).toMatchSnapshot();
});

it("clicking left arrow goes to previous card", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />);

  //TODO: interdisperse events and see what they expect after each click
  // when we click, test it
  fireEvent.click(container.querySelector(".bi-arrow-right-circle"));
  fireEvent.click(container.querySelector(".bi-arrow-left-circle"));

  const img = container.querySelector("img");
  expect(img.getAttribute("src")).toContain("test1.com");
});

it('hides left arrow when on first image', function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />);

  const leftArrow = container.querySelector(".bi-arrow-left-circle");

  expect(leftArrow).not.toBeInTheDocument();
});

it('hides right arrow when on last image', function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />);

  //TODO: interdisperse events and see what they expect after each click
  // when we click, test it
  fireEvent.click(container.querySelector(".bi-arrow-right-circle"));
  fireEvent.click(container.querySelector(".bi-arrow-right-circle"));

  const rightArrow = container.querySelector(".bi-arrow-right-circle");

  expect(rightArrow).not.toBeInTheDocument();
});

