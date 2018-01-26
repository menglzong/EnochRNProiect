//
//  EnochUIManager.m
//  RNProject
//
//  Created by meng on 2018/1/19.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "EnochUIManager.h"

@implementation EnochUIManager

RCT_EXPORT_MODULE(EnochUIManager)

- (UIView *)view
{
  return [[EnochTestView alloc] init];
}


@end
