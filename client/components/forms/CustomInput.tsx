import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Controller } from "react-hook-form";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

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
  toggleVisibility?: () => void; // For password visibility toggle
};

export default function CustomInput({
  control,
  name,
  rules,
  placeholder,
  label,
  icon,
  secureTextEntry = false,
  placeholderTextColor = "#E5E5E540",
  labelTextColor = "text-primary",
  toggleVisibility,
}: CustomInputProps) {
  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value }, fieldState }) => (
          <View style={{ display: "flex", flexDirection: "column", rowGap: 8 }}>
            <Text className={`font-dm-sans ${labelTextColor}`}>{label}</Text>
            <View className="relative flex-row items-center">
              <TextInput
                className="bg-backgroundLight text-white p-4 rounded-xl font-dm-sans flex-1 pr-12"
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                value={value}
                onChangeText={onChange}
                secureTextEntry={secureTextEntry}
              />
              {icon && (
                <View style={{ position: "absolute", right: 16 }}> 
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
            </View>
            {fieldState.error && (
              <Text className="text-accent font-dm-sans">
                {fieldState.error.message || "This field is required."}
              </Text>
            )}
          </View>
        )}
      />
    </>
  );
}