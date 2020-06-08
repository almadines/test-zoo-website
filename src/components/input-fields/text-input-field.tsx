import * as React from "react";

export enum TextInputFieldType {
  input = "input",
  textarea = "textarea",
}

interface InputFieldProps {
  initialValue?: string;
  identifier: string;
  type: TextInputFieldType;
  required?: boolean;
  onChange: (newValue: string, identifier: string) => void;
}

interface InputFieldState {
  value: string;
}

export class InputField extends React.PureComponent<
  InputFieldProps,
  InputFieldState
> {
  constructor(props: InputFieldProps) {
    super(props);
    this.state = { value: props.initialValue || "" };
  }

  public inputChanged(event: Event): void {
    event.stopPropagation();
    if (event.target instanceof HTMLInputElement) {
      this.setState({ value: event.target.value || "" });
    } else {
      console.warn(
        "Event target of inputChanged in InputField was not an HTMLInputElement: ",
        event.target
      );
    }

    this.props.onChange(this.state.value, this.props.identifier);
  }

  public inputProps(): any {
    return {
      type: "text",
      className: "form-control",
      placeholder: "",
      value: this.state.value,
      onChange: this.inputChanged.bind(this),
      onInput: this.inputChanged.bind(this),
    };
  }

  public render(): JSX.Element {
    switch (this.props.type) {
      case TextInputFieldType.input:
        return <input {...this.inputProps()} />;
      case TextInputFieldType.textarea:
        return <textarea {...this.inputProps()} />;
    }
  }
}

export default InputField;
