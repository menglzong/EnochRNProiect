//
//  RCTTestManager.m
//  RNProject
//
//  Created by meng on 2018/1/19.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "RCTTestManager.h"

@implementation RCTTestManager

RCT_EXPORT_MODULE(RCTTestManager)

RCT_EXPORT_METHOD(RNInvokeOCCallBack:(NSDictionary *)dictionary){
  NSLog(@"接收到RN传过来的数据为:%@",dictionary);
//  NSArray *events = [[NSArray alloc] initWithObjects:@"张三",@"李四", nil];
//  callback(@[[NSNull null], events]);
}

@end
