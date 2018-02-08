import React from "react";
import expect from "test/expect";
import sinon from "sinon";

import Button from ".";

import View from "../core/View";

describe("Button", () => {
  describe("Core", () => {
    it("renders a default button", () => {
      expect(
        <Button.Core>Default</Button.Core>,
        "to render as",
        <View role="button">Default</View>
      );
    });

    it("is clickable", () => {
      const onClick = sinon.spy();

      return expect(
        <Button.Core onClick={onClick}>Click me!</Button.Core>,
        "when deeply rendered",
        "with event",
        "click"
      ).then(() => {
        expect(onClick, "was called once");
      });
    });

    describe("it is focusable", () => {
      describe("using the keyboard", () => {
        it("is focusable", () => {
          const onKeyboardFocus = sinon.spy();

          return expect(
            <Button.Core onKeyboardFocus={onKeyboardFocus}>
              Focus on me!
            </Button.Core>,
            "when deeply rendered",
            "with event",
            "focus"
          ).then(() => {
            expect(onKeyboardFocus, "was called times", 1);
          });
        });
      });

      describe("using the mouse", () => {
        it("is focusable", () => {
          const onFocus = sinon.spy();
          const onKeyboardFocus = sinon.spy();

          return expect(
            <Button.Core onFocus={onFocus} onKeyboardFocus={onKeyboardFocus}>
              Focus on me!
            </Button.Core>,
            "when deeply rendered",
            "with event",
            "mouseDown",
            "with event",
            "focus"
          ).then(() => {
            expect(onKeyboardFocus, "was called times", 0);
            expect(onFocus, "was called times", 1);
          });
        });
      });
    });

    describe("it is able to recognize submit key press", () => {
      const SPACE_KEY_CODE = 32;
      const ENTER_KEY_CODE = 13;
      const ARROW_LEFT_KEY_CODE = 37;
      let onSubmitKeyPressed;

      beforeEach(() => {
        onSubmitKeyPressed = sinon.spy();
      });

      it("is called when enter key is pressed", () => {
        return expect(
          <Button.Core onSubmitKeyPressed={onSubmitKeyPressed}>
            Example
          </Button.Core>,
          "when deeply rendered",
          "with event",
          "keyDown",
          { keyCode: ENTER_KEY_CODE }
        ).then(() => {
          expect(onSubmitKeyPressed, "was called");
        });
      });

      it("is called when space key is pressed", () => {
        return expect(
          <Button.Core onSubmitKeyPressed={onSubmitKeyPressed}>
            Example
          </Button.Core>,
          "when deeply rendered",
          "with event",
          "keyDown",
          { keyCode: SPACE_KEY_CODE }
        ).then(() => {
          expect(onSubmitKeyPressed, "was called");
        });
      });

      it("is not called otherwise", () => {
        return expect(
          <Button.Core onSubmitKeyPressed={onSubmitKeyPressed}>
            Example
          </Button.Core>,
          "when deeply rendered",
          "with event",
          "keyDown",
          { keyCode: ARROW_LEFT_KEY_CODE }
        ).then(() => {
          expect(onSubmitKeyPressed, "was not called");
        });
      });
    });

    describe("when disabled", () => {
      it("is not clickable", () => {
        const onClick = sinon.spy();

        return expect(
          <Button.Core onClick={onClick} disabled>
            Disabled
          </Button.Core>,
          "when deeply rendered",
          "with event",
          "click"
        ).then(() => {
          expect(onClick, "was not called");
        });
      });
    });
  });

  describe("with a test id", () => {
    it("renders a button with the test id", () => {
      expect(
        <Button testId="wat">Testable</Button>,
        "to deeply render as",
        <View role="button" testId="wat">
          Testable
        </View>
      );
    });
  });

  describe("with the type primary", () => {
    it("renders a primary button", () => {
      expect(
        <Button type="primary">Primary</Button>,
        "to deeply render as",
        <View role="button" className="type_primary">
          Primary
        </View>
      );
    });
  });

  describe("with danger provided", () => {
    it("renders a danger button", () => {
      expect(
        <Button danger>Danger</Button>,
        "to deeply render as",
        <View role="button" className="danger">
          Danger
        </View>
      );
    });
  });

  describe("with the type basic", () => {
    it("renders a basic button", () => {
      expect(
        <Button type="basic">Basic</Button>,
        "to deeply render as",
        <View role="button" className="type_basic">
          Basic
        </View>
      );
    });
  });

  describe("with the type anchor", () => {
    it("renders an anchor button", () => {
      expect(
        <Button type="anchor">Anchor</Button>,
        "to deeply render as",
        <View role="button" className="type_anchor">
          Anchor
        </View>
      );
    });
  });

  describe("when is stretched", () => {
    it("renders a stretched button", () => {
      expect(
        <Button stretched>Stretched</Button>,
        "to deeply render as",
        <View role="button" className="stretched">
          Stretched
        </View>
      );
    });
  });

  describe("when size is medium", () => {
    it("renders a medium sized button", () => {
      expect(
        <Button size="medium">Medium</Button>,
        "to deeply render as",
        <View role="button" className="size_medium">
          Medium
        </View>
      );
    });
  });

  describe("when size is large", () => {
    it("renders a large button", () => {
      expect(
        <Button size="large">Large</Button>,
        "to deeply render as",
        <View role="button" className="size_large">
          Large
        </View>
      );
    });
  });

  describe("when given a tab index", () => {
    it("renders a button with that tab index", () => {
      expect(
        <Button tabIndex={42}>Tab order</Button>,
        "to deeply render as",
        <View role="button" tabIndex={42}>
          Tab order
        </View>
      );
    });
  });

  describe("when disabled", () => {
    it("renders a disabled button", () => {
      expect(
        <Button disabled>Disabled</Button>,
        "to deeply render as",
        <View role="button" tabIndex={null} className="disabled" disabled>
          Disabled
        </View>
      );
    });
  });
});