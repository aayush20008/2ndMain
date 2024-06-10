'use client'
import Section from '@/components/Section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import React from 'react';
import { VictoryChart, VictoryLine, VictoryAxis, VictoryGroup, VictoryBar } from 'victory';
import data from "@/data.json";
import Sidebar from '@/components/Sidebar';


const sentimentData = [
    { category: 'High Base', count: 934, percentage: 34 },
    { category: 'Affordable', count: 811, percentage: 28 },
    { category: 'Quality', count: 456, percentage: 21 },
    { category: 'Expensive', count: 245, percentage: 15 },
    { category: 'Effective', count: 111, percentage: 9 },
    { category: 'Packaging', count: 19, percentage: 3 },
  ];
  
  const InsightsSection = () => {
    return (
      <Section id="insights" title="Insights">
        <VictoryChart domainPadding={20}>
          <VictoryAxis
            tickValues={sentimentData.map((d, i) => i + 1)}
            tickFormat={sentimentData.map(d => d.category)}
          />
          <VictoryAxis dependentAxis tickFormat={(x) => `${x}%`} />
          <VictoryGroup offset={10} colorScale={"qualitative"}>
            <VictoryBar
              data={sentimentData}
              x="category"
              y="percentage"
            />
          </VictoryGroup>
        </VictoryChart>
      </Section>
    );
  };
  

const ReportsSection = () => {
  const data = [
    { month: 'Jan', steps: 12000 },
    { month: 'Feb', steps: 19000 },
    { month: 'Mar', steps: 15000 },
    { month: 'Apr', steps: 18000 },
    { month: 'May', steps: 22000 },
    { month: 'Jun', steps: 17000 },
    { month: 'Jul', steps: 20000 },
    { month: 'Aug', steps: 18500 },
    { month: 'Sep', steps: 16000 },
    { month: 'Oct', steps: 21000 },
    { month: 'Nov', steps: 19500 },
    { month: 'Dec', steps: 15800 },
  ];

  return (
    <div>
      <VictoryChart domainPadding={20}>
        <VictoryLine data={data} x="month" y="steps" />
        <VictoryAxis dependentAxis />
        <VictoryAxis />
      </VictoryChart>
    </div>
  );
};


interface FeedData {
    emoji: string;
    percentage: number;
    label: string;
  }
  
  const dummyFeedData: FeedData[] = [
    { emoji: '😄', percentage: 40, label: 'Positive' },
    { emoji: '😐', percentage: 25, label: 'Neutral' },
    { emoji: '😕', percentage: 20, label: 'Slightly Negative' },
    { emoji: '😞', percentage: 10, label: 'Negative' },
    { emoji: '😡', percentage: 5, label: 'Very Negative' },
  ];
  
  const FeedBySection = () => {
    return (
      <div>
        <div className="mb-4">
          <p>Total Feeds: 1200</p>
        </div>
        <div className="flex flex-col items-start">
          {dummyFeedData.map((data, index) => (
            <div key={index} className="flex items-center mb-2">
              <span className="mr-2">{data.emoji}</span>
              <div className="w-48 h-4 bg-gray-200 rounded-full">
                <div
                  className="h-4 bg-blue-500 rounded-full"
                  style={{ width: `${data.percentage}%` }}
                ></div>
              </div>
              <span className="ml-2">{data.percentage}%</span>
              <span className="ml-2">{data.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

const Dashboard = () => {
  return (
    <>
    <div className="flex flex-1 min-h-screen pt-16">
        <div className="fixed h-screen">
          <Sidebar />
        </div>
        <div className="flex-1 overflow-y-auto">
            <Section id="feed" title="Feed By">
            <FeedBySection />
          </Section>
          <Section id="reports" title="Reports">
            <ReportsSection />
          </Section>
          <Section id="competitors" title="Competitors">
            <div >
                <Carousel className="w-full max-w-2xl">
                <CarouselContent>
                    {
                        data.map((val, index) => (
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>{val.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <img src={val.src} alt="" className='max-h-20'/>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <div className="hidden md:block">
                    <CarouselPrevious />
                </div>
                <div className="hidden md:block">
                    <CarouselNext />
                </div>
                </Carousel>
            </div>
          </Section>
          <InsightsSection />
        </div>
      </div>

    </>
  );
};

export default Dashboard;