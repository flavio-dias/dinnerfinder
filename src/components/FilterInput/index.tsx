import React from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { Container, InputFilter } from "./styles";
import { useTheme } from "styled-components";

interface FilterInputProps {
    value: string,
    setValue: any,
    onConfirm: () => void
}

const FilterInput = ({ value, setValue, onConfirm }: FilterInputProps) => {
    const theme = useTheme();

    return <Container>
        <MaterialIcons name='search' color={theme.colors.primary} size={28} />
        <InputFilter
            value={value}
            onChangeText={setValue}
            onSubmitEditing={onConfirm}
            placeholder='Encontre um restaurante'
            autoCapitalize
            placeholderTextColor={theme.colors.placeholder}
        />
    </Container>
}

export default FilterInput;