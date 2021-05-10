# Circle CI Kata

Circle CI is a continuos integration and delivery tools that be used on any cloud.

## Challenges

## 1 - Setup

Prerequisites

- Forked the repo (njm3754/kata-bootstrap)
- Cloned the repo on local machine
- Run `npm ci` & `npm test` locally to verify that everything is running as expected

Steps

- Login into [CircleCI](https://circleci.com/) using Github credentials.
- Select the organization under which your repo exists.
- Click on `Set Up Project` to select the project you want to run with CircleCI.
- Select `Use Existing Config` option so that CircleCi uses the config file from the repo (.circleci/[config.yml](.circleci/config.yml)).
- Finally click the `Start Building` button to trigger the pipeline.

## 2 - Jobs & Workflows

We have a NodeJs-Jest project setup for deployment.

The goal of this sub task is to run `npm install` and `npm test` commands within a job and verify the results in the Circle CI portal.

The run should look something like this

![alt text](./CC1.png)

As you can notice the there is keyword `workflow` and the reason this generic name appears is because we haven`t setup workflows yet.
In simple terms, workflows allow you to set rules for defining a collection of jobs and their run order.

So, next step will be to add the following workflow block on the top of the code and the result should be like the image below.

    workflows:
      version: 2
      build_and_test: #name of the workflow
      jobs:
        - (Add name of the job here)

![alt text](./CC2.png)

## 3 - Sequential Job Execution

## 4 - Manual Approval Deployment
