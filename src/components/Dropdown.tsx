import Select from 'react-select';
import styled from 'styled-components';

interface DropdownOption {
  value: string;
  label: string;
  imageUrl?: string;
}

interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const StyledSelect = styled(Select)`
  .react-select__control {
    padding: 8px;
    border-radius: 24px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: none;
    background-color: white;
    min-height: 56px;

    &:hover {
      border-color: #12A894;
    }
  }

  .react-select__control--is-focused {
    border-color: #12A894 !important;
    box-shadow: none;
  }

  .react-select__value-container {
    padding: 0 8px;
  }

  .react-select__single-value {
    color: var(--text-dark);
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .react-select__option {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    cursor: pointer;
    
    &:hover {
      background-color: rgba(18, 168, 148, 0.1);
    }
  }

  .react-select__option--is-selected {
    background-color: rgba(18, 168, 148, 0.2);
    color: var(--text-dark);
    
    &:hover {
      background-color: rgba(18, 168, 148, 0.2);
    }
  }
`;

const Image = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
`;

const Dropdown = ({ options, value, onChange, placeholder = 'Select option' }: DropdownProps) => {
  const formatOptionLabel = ({ label, imageUrl }: DropdownOption) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      {imageUrl && <Image src={imageUrl} alt={label} />}
      {label}
    </div>
  );

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <StyledSelect
      options={options}
      value={selectedOption || null}
      onChange={(option) => onChange((option as DropdownOption)?.value || '')}
      placeholder={placeholder}
      formatOptionLabel={formatOptionLabel}
      classNamePrefix="react-select"
      isSearchable={false}
    />
  );
};

export default Dropdown;
