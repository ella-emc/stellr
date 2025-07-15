import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Pressable, Text, View } from "react-native";

// Replace later with actual astronomy interests options from database
import topics from "@/app/data/astronomy-topics.json";

type SignUpForm3Props = {
  step: number;
  setStep: (step: number) => void;
}

export default function SignUpForm1({
  step,
  setStep
}: SignUpForm3Props) {
  const { control, handleSubmit, formState: { errors }, getValues } = useForm();

  // State to handle topic selection
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const onSubmit = (data: any) => {
    console.log("Form submitted with data:", data);
    // Submission logic goes here
  };

  const handleTopicSelection = (topic: string) => {
    console.log(`Selected topic: ${topic}`);
  }

  return (
    <View className="flex-col gap-y-4">
      <Text className="text-text font-dm-sans">Select at most 5 astronomy things that interest you</Text>

      <View className="flex flex-row flex-wrap gap-x-2 gap-y-4">
        {
          topics.map((topic, index) => (
            <Pressable
              key={index}
              className="bg-backgroundLight py-3 px-5 rounded-3xl"
              onPress={() => handleTopicSelection(topic.label)}
            >
              <Text className="text-text font-dm-sans">{topic.name.toLowerCase()}</Text>
            </Pressable>
          ))
        }
      </View>

      <View className="flex flex-row justify-between">
        <Pressable
          className="flex w-1/3 self-end items-center justify-center border-2 border-accent p-4 rounded-xl font-dm-sans mt-4"
          onPress={() => setStep(step - 1)}
        >
          <Text className="text-accent font-sora-bold">Back</Text>
        </Pressable>
        <Pressable
          className="flex w-1/3 self-end items-center justify-center border-2 border-accent p-4 rounded-xl font-dm-sans mt-4"
          onPress={() => setStep(step + 1)}
        >
          <Text className="text-accent font-sora-bold">Next</Text>
        </Pressable>
      </View>
    </View>
  )
}