package br.edu.utfpr.email.send.automated.schedule;

import org.quartz.*;

import java.util.Date;

public interface AutomatedScheduler {

    Class<? extends Job> getJobClass();
    void setJobClass(Class<? extends Job> jobClass);

    String getJobIdentity();
    void setJobIdentity(String jobIdentity);

    String getJobGroup();
    void setJobGroup(String jobGroup);

    String getTriggerIdentity();
    void setTriggerIdentity(String triggerIdentity);

    String getTriggerGroup();
    void setTriggerGroup(String triggerGroup);

    int getIntervalInHours();
    void setIntervalInHours(int intervalInHours);

    Date getDateStartAt();
    void setDateStartAt(Date dateStartAt);

    Date getDateEndAt();
    void setDateEndAt(Date dateEndAt);

    boolean isRecurrent();
    void setRecurrent(boolean recurrent);

    default JobDetail getJobDetail() {
        return JobBuilder.newJob(getJobClass())
                .withIdentity("job_" + getJobIdentity(), getJobGroup())
                .build();
    }

    default Trigger getTrigger() {
        if (isRecurrent())
            return TriggerBuilder.newTrigger()
                    .withIdentity(getTriggerIdentity(), getTriggerGroup())
                    .startAt(getDateStartAt())
                    .withSchedule(
                            SimpleScheduleBuilder.simpleSchedule()
    //                                .withIntervalInHours(1 * 24)  // dia * 24 hrs
    //                            .withIntervalInMinutes(1)  // teste
                                    .withIntervalInMinutes(getIntervalInHours()) // teste
                                    .repeatForever()
                    )
                    .endAt(getDateEndAt())
                    .build();

        return TriggerBuilder.newTrigger()
                .withIdentity(getTriggerIdentity(), getTriggerGroup())
                .startAt(getDateStartAt())
                .build();
    }

}