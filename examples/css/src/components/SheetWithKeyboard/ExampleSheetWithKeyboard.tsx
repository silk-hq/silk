"use client";
import { useState } from "react";
import { Scroll, VisuallyHidden, useClientMediaQuery } from "@silk-hq/components";
import { SheetWithKeyboard } from "./SheetWithKeyboard";
import "./ExampleSheetWithKeyboard.css";

// ================================================================================================
// Data
// ================================================================================================

const formData = {
  name: {
    label: "Name",
    description: "The name displayed on the product's card.",
    name: "name",
    placeholder: "Classic t-shirt",
  },
  brand: {
    label: "Brand",
    description: "The brand of the product.",
    name: "brand",
    placeholder: "Acme",
  },
  type: {
    label: "Type",
    description: 'The type of the product (e.g. "t-shirt", "pants").',
    name: "type",
    placeholder: "T-shirt",
  },
  color1: {
    label: "Primary color",
    name: "color1",
    type: "color",
  },
  color2: {
    label: "Secondary color",
    name: "color2",
    type: "color",
  },
  color3: {
    label: "Tertiary color",
    name: "color3",
    type: "color",
  },
  price: {
    label: "Price",
    description: "The price of the product (€).",
    name: "price",
    type: "number",
    placeholder: "19",
  },
  description: {
    label: "Description",
    description: "The description that will shown on the product's page.",
    name: "description",
    type: "textarea",
    placeholder: "Soft and stylish t-shirt made from 100% organic cotton for all-day comfort.",
  },
};

// ================================================================================================
// TextInputField
// ================================================================================================

const TextInputField = ({
  data: { label, name, type = "text", description, placeholder },
  formValues,
  setFormValues,
  ...restProps
}: any) => {
  return (
    <div className="ExampleSheetWithKeyboard-field" {...restProps}>
      <label htmlFor={name} className="ExampleSheetWithKeyboard-label">
        {label}
      </label>
      <p className="ExampleSheetWithKeyboard-labelDescription">{description}</p>
      <input
        className="ExampleSheetWithKeyboard-input"
        id={name}
        name={name}
        type={type}
        {...(type === "number" ? { pattern: "\\d*" } : {})}
        placeholder={placeholder}
        // @ts-ignore
        value={formValues[name]}
        onChange={(event) =>
          setFormValues((prevValue: any) => ({
            ...prevValue,
            [name]: event.target.value,
          }))
        }
      />
    </div>
  );
};

// ================================================================================================
// ColorInputField
// ================================================================================================

const ColorInputField = ({
  data: { name, type, label },
  formValues,
  setFormValues,
  ...restProps
}: any) => {
  return (
    <div className="ExampleSheetWithKeyboard-colorInputWrapper" {...restProps}>
      <VisuallyHidden.Root asChild>
        <label htmlFor={name} className="ExampleSheetWithKeyboard-label">
          {label}
        </label>
      </VisuallyHidden.Root>
      <input
        className="ExampleSheetWithKeyboard-colorInput"
        id={name}
        name={name}
        type={type}
        // @ts-ignore
        value={formValues[name]}
        onChange={(event) =>
          setFormValues((prevValue: any) => ({
            ...prevValue,
            [name]: event.target.value,
          }))
        }
      />
      <div
        className="ExampleSheetWithKeyboard-colorInputReplacement"
        // @ts-ignore
        style={{ "--color": formValues[name] }}
      />
    </div>
  );
};

// ================================================================================================
// Full component
// ================================================================================================

const defaultValues = {
  name: "TrailBlazer Runners",
  brand: "NatureStride",
  type: "Footwear",
  color1: "#d1a74c",
  color2: "#7dd42c",
  color3: "#ffffff",
  price: 149,
  description: "Experience unmatched comfort and performance NatureStride's TrailBlazer Runners.",
};

const ExampleSheetWithKeyboard = () => {
  const largeViewport = useClientMediaQuery("(min-width: 800px)");
  const [formValues, setFormValues] = useState(defaultValues);

  return (
    <SheetWithKeyboard.Root>
      <SheetWithKeyboard.Trigger className="ExampleSheetWithKeyboard-presentTrigger">
        Sheet with Keyboard
      </SheetWithKeyboard.Trigger>
      <SheetWithKeyboard.Portal>
        <SheetWithKeyboard.View>
          <SheetWithKeyboard.Backdrop />
          <SheetWithKeyboard.Content className="ExampleSheetWithKeyboard-content">
            <div className="ExampleSheetWithKeyboard-header">
              <SheetWithKeyboard.Trigger
                className="ExampleSheetWithKeyboard-cancelButton"
                action="dismiss"
              >
                Cancel
              </SheetWithKeyboard.Trigger>
              <SheetWithKeyboard.Title className="ExampleSheetWithKeyboard-title">
                Edit Product
              </SheetWithKeyboard.Title>
              <SheetWithKeyboard.Trigger
                className="ExampleSheetWithKeyboard-saveButton"
                action="dismiss"
              >
                Save
              </SheetWithKeyboard.Trigger>
            </div>
            <Scroll.Root asChild>
              <Scroll.View
                className="ExampleSheetWithKeyboard-scrollView"
                scrollGestureTrap={{ yEnd: !largeViewport }}
              >
                <Scroll.Content className="ExampleSheetWithKeyboard-scrollContent">
                  <div className="ExampleSheetWithKeyboard-imageGallery">
                    <Scroll.Root asChild>
                      <Scroll.View
                        className="ExampleSheetWithKeyboard-galleryScrollView"
                        axis="x"
                        nativeScrollbar={false}
                      >
                        <Scroll.Content className="ExampleSheetWithKeyboard-galleryScrollContent">
                          {[0, 1, 2, 3].map((element) => (
                            <div className="ExampleSheetWithKeyboard-image" key={element} />
                          ))}
                        </Scroll.Content>
                      </Scroll.View>
                    </Scroll.Root>
                  </div>
                  <div className="ExampleSheetWithKeyboard-info">
                    <h3 className="ExampleSheetWithKeyboard-details">Product details</h3>
                    <div className="ExampleSheetWithKeyboard-form">
                      <TextInputField
                        data={formData.name}
                        formValues={formValues}
                        setFormValues={setFormValues}
                      />
                      <TextInputField
                        data={formData.brand}
                        formValues={formValues}
                        setFormValues={setFormValues}
                      />
                      <TextInputField
                        data={formData.type}
                        formValues={formValues}
                        setFormValues={setFormValues}
                      />
                      <div className="ExampleSheetWithKeyboard-field fieldType-color">
                        <div className="ExampleSheetWithKeyboard-label">Colors</div>
                        <p className="ExampleSheetWithKeyboard-labelDescription">
                          The main colors of the product.
                        </p>
                        <div className="ExampleSheetWithKeyboard-colorInputs">
                          <ColorInputField
                            data={formData.color1}
                            formValues={formValues}
                            setFormValues={setFormValues}
                          />
                          <ColorInputField
                            data={formData.color2}
                            formValues={formValues}
                            setFormValues={setFormValues}
                          />
                          <ColorInputField
                            data={formData.color3}
                            formValues={formValues}
                            setFormValues={setFormValues}
                          />
                        </div>
                      </div>
                      <TextInputField
                        data={formData.price}
                        formValues={formValues}
                        setFormValues={setFormValues}
                      />
                      <div className="ExampleSheetWithKeyboard-field fieldType-description">
                        <label
                          htmlFor={formData.description.name}
                          className="ExampleSheetWithKeyboard-label"
                        >
                          {formData.description.label}
                        </label>
                        <p className="ExampleSheetWithKeyboard-labelDescription">
                          {formData.description.description}
                        </p>
                        <textarea
                          className="ExampleSheetWithKeyboard-textarea"
                          id={formData.description.name}
                          name={formData.description.name}
                          rows={5}
                          placeholder={formData.description.placeholder}
                          // @ts-ignore
                          value={formValues[formData.description.name]}
                          onChange={(event) =>
                            setFormValues((prevValue) => ({
                              ...prevValue,
                              [formData.description.name]: event.target.value,
                            }))
                          }
                        />
                      </div>
                    </div>
                  </div>
                </Scroll.Content>
              </Scroll.View>
            </Scroll.Root>
          </SheetWithKeyboard.Content>
        </SheetWithKeyboard.View>
      </SheetWithKeyboard.Portal>
    </SheetWithKeyboard.Root>
  );
};

export { ExampleSheetWithKeyboard };
