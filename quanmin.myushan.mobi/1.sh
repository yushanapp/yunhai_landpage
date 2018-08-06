#!/bin/bash
for i in `seq 1 6`;
do
for j in `seq 1 6`; 
do
if [ $i -eq $j ];then 
sed -i "s#比心#全民TV#g" $i.html;
fi;
done
done 
