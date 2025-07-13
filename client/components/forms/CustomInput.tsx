import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Controller } from "react-hook-form";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

type CustomInputProps = {
  control: any;
  name: string;
  rules?: object;
  placeholder: string;
  label: string;
  icon?: IconProp;
  secureTextEntry?: boolean;
  placeholderTextColor?: string;
  labelTextColor?: string;
  toggleVisibility?: () => void;  // For password visibiility toggle
}

export default function CustomInput({ 
  control, 
  name, 
  rules, 
  placeholder, 
  label,
  icon, 
  secureTextEntry = false,
  placeholderTextColor = "#E5E5E540",
  labelTextColor = "text-text/80",
  toggleVisibility
}: CustomInputProps) {
  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value }, fieldState }) => (
          <View className="flex-col gap-y-2">
            <Text className={`font-dm-sans ${labelTextColor}`}>{label}</Text>
            <TextInput
              className="bg-backgroundLight text-white p-4 rounded-xl mb-1 font-dm-sans relative"
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
              value={value}
              onChangeText={onChange}
              secureTextEntry={secureTextEntry}
            />
            {icon && (
              <View className="absolute right-4 top-1/2">
                {toggleVisibility ? (
                  <TouchableOpacity onPress={toggleVisibility}>
                    <FontAwesomeIcon
                      icon={icon}
                      size={18}
                      style={{ color: "#FFFFFF", opacity: 0.5 }}
                    />
                  </TouchableOpacity>
                ) : (
                  <FontAwesomeIcon
                    icon={icon}
                    size={18}
                    style={{ color: "#FFFFFF", opacity: 0.5 }}
                  />
                )}
              </View>
            )}
            {fieldState.error && (
              <Text className="text-accent font-dm-sans mt-1">
                {fieldState.error.message || "This field is required."}
              </Text>
            )}
          </View>
        )}
      />
    </>
  );
}