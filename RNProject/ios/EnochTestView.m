//
//  EnochTestView.m
//  RNProject
//
//  Created by meng on 2018/1/19.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "EnochTestView.h"
#import <React/RCTRootView.h>

@implementation EnochTestView

- (instancetype)initWithFrame:(CGRect)frame {
  if (self = [super initWithFrame:frame]) {
    self.backgroundColor = [UIColor redColor];
    UIButton *sub = [UIButton buttonWithType:UIButtonTypeCustom];
    sub.frame = CGRectMake(100, 100, 200, 200);
    sub.backgroundColor = [UIColor blueColor];
    [sub addTarget:self action:@selector(btnClick) forControlEvents:UIControlEventTouchUpInside];
    [self addSubview:sub];
  }
  return self;
}

//调用rn 带参数
- (void)btnClick {
  NSDictionary *dict = @{@"name": @"meng"};
  RCTBridge *bridge = [[RCTBridge alloc] init];
  RCTRootView *view = [[RCTRootView alloc] initWithBridge:bridge moduleName:@"EnochBridge" initialProperties:dict];
}

@end
