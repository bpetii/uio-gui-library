import React from 'react';
import * as PropTypes from 'prop-types';
import {
  CustomSelect,
  selectOptionShape,
  selectedOptionsShape,
} from './custom-select/custom-select';
import { standardizeInputs } from './select.input';

export const Select = (props) => {
  const {
    name,
    options: rawOptions = [],
    value: rawSelectedOptions,
    onChange,
    deprecatedEventHandler,
    warning,
    error,
    checkNonExistentValues,
    closeOnOptionActionClick,
  } = props;
  const {
    multi,
    simpleInputs,
    options,
    selectedOptions,
    firstSelectedOptionIndex,
    hasNonExistentValue,
  } = standardizeInputs(
    rawOptions,
    rawSelectedOptions,
    checkNonExistentValues,
  );

  const nonExistentWarning = 'Value no longer available for re-selection';
  const fullWarning = hasNonExistentValue ? (
    warning ? (
      <div>
        <div>{nonExistentWarning}</div>
        <div>{warning}</div>
      </div>
    ) : (
      nonExistentWarning
    )
  ) : (
    warning
  );

  const fullError =
    hasNonExistentValue && error ? (
      <div>
        <div>{nonExistentWarning}</div>
        <div>{error}</div>
      </div>
    ) : (
      error
    );

  const onChangeSelectedValue = (evt, selectedOptions) => {
    if (deprecatedEventHandler) {
      const newSelectedOptions = multi
        ? selectedOptions.map((o) => (simpleInputs ? o.value : o))
        : simpleInputs
        ? selectedOptions.value
        : selectedOptions;
      onChange(newSelectedOptions);
    } else {
      /*
        - For React synthetic events, mutate the values and forward the event
        - For native (keyboard) events, clone the enumerable properties and forward
        - Explanation:
          https://gitlab.com/oliasoft-open-source/react-ui-library/-/issues/77
      */
      const isSyntheticEvent = !(evt instanceof Event);
      const value = multi ? selectedOptions : selectedOptions.value;
      if (isSyntheticEvent) {
        evt.target.name = name;
        evt.target.value = value;
        if (!multi) {
          evt.target.label = selectedOptions.label;
        }
        onChange(evt);
      } else {
        onChange({
          ...evt,
          target: {
            ...evt.target,
            name,
            value,
            ...(!multi && { label: selectedOptions.label }),
          },
        });
      }
    }
  };

  return (
    <CustomSelect
      {...props} // eslint-disable-line react/jsx-props-no-spreading
      options={options}
      selectedOptions={selectedOptions}
      onChange={onChangeSelectedValue}
      multi={multi}
      firstSelectedOptionIndex={firstSelectedOptionIndex}
      warning={fullWarning}
      error={fullError}
      testId={testId}
      closeOnOptionActionClick={closeOnOptionActionClick}
    />
  );
};

Select.defaultProps = {
  autoLayerWidth: false,
  borderRadius: null,
  clearable: false,
  disabled: false,
  error: null,
  firstSelectedOptionIndex: null,
  groupOrder: null,
  isInTable: false,
  multi: false,
  onBlur: () => {},
  onChange: () => {},
  onCreate: null,
  onFocus: () => {},
  right: false,
  searchable: true,
  selectedOption: null,
  selectedOptions: null,
  small: false,
  tabIndex: 0,
  tooltip: null,
  warning: null,
  width: null,
  checkNonExistentValues: true,
  closeOnOptionActionClick: true,
  testId: undefined,
};

const SelectShape = {
  name: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
  warning: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
  tooltip: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
  options: PropTypes.arrayOf(selectOptionShape).isRequired,
  value: selectedOptionsShape,
  onChange: PropTypes.func,
  onCreate: PropTypes.func,
  small: PropTypes.bool,
  tabIndex: PropTypes.number,
  width: PropTypes.string,
  autoLayerWidth: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  searchable: PropTypes.bool,
  clearable: PropTypes.bool,
  maxTooltipWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  autoScroll: PropTypes.bool,
  checkNonExistentValues: PropTypes.bool,
  testId: PropTypes.string,
  closeOnOptionActionClick: PropTypes.bool,
  //native select only:
  borderRadius: PropTypes.number,
  //deprecated props:
  deprecatedEventHandler: PropTypes.bool,
  //private props (don't use)
  isInTable: PropTypes.bool,
  right: PropTypes.bool,
};

Select.propTypes = PropTypes.shape(SelectShape).isRequired;
